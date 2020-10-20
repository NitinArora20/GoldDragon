const path = require('path')
const fs = require('fs')

const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')
//const config = require('./config.json')
const roleClaim = require('./role-claim')
const roleClaim2 = require('./role-claim2')
const welcome = require('./welcome')
const poll = require('./poll')
const memberCount = require('./member-count')
const antiAd = require('./anti-ad')
const loadCommands = require('./commands/load-commands')
const modLogs = require('./mod-logs')


client.on('ready', () => {
  console.log(`${client.user.username} is online`)

  
  modLogs(client)
  loadCommands(client)
  antiAd(client) 
  memberCount(client)
  welcome(client)
  roleClaim2(client)
  roleClaim(client)
  poll(client)
})





client.login(process.env.DJS_TOKEN)
