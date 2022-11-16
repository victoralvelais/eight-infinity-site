import * as fs from 'node:fs/promises'
import path from 'path'
import startClient from '../client.js'
import { getMusicMessages, parseMessages, grabLinks } from '../music'

// https://devhints.io/jest
// May need for TypeScript https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/

describe("Discord Music", () => {
  it("uses bot token", () => {
    expect(process.env.BOT_TOKEN.length).toBe(59)
  })

  it("starts the discord client", async () => {
    const client = await startClient()
    expect(client.isReady()).toBe(true)
  })

  it("gets music messages", async () => {
    const messages = await importMockData()
    const shouldMock = shouldUseMockData(messages)
    const mockMessages = jest.fn(() => messages.data)

    const client = await startClient()
    const musicMessages = shouldMock ? mockMessages() : await getMusicMessages(client)
    expect(musicMessages).toHaveLength(100)
    if (!shouldMock) await saveMockData(musicMessages)

    const musicLinks = grabLinks(musicMessages)
    expect(musicLinks[0]).toHaveProperty('music')
    expect(musicLinks[0].music).toEqual(expect.any(String))
  })
})

async function importMockData() {
  const mockPath = path.join(__dirname, '..', '__mocks__', 'music.json')
  try {
    return JSON.parse(await fs.readFile(mockPath))
  } catch (err) {
    return { lastUpdated: null }
  }
}

function shouldUseMockData(messages = {}) {
  const { lastUpdated } = messages
  if (!lastUpdated) return false
  const date = new Date()
  const diff = date - new Date(lastUpdated)
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  return diffDays < 1
}

async function saveMockData(data) {
  const mockedData = parseMessages(data)
  const jsonContent = JSON.stringify({ lastUpdated: new Date(), data: mockedData }, null, 2)
  const mockOutput = path.join(__dirname, '..', '__mocks__', 'music.json')

  try {
    await fs.writeFile(mockOutput, jsonContent)
    console.log('Mock data saved')
  } catch (err) {
    console.error(err.message)
  }
}
