module.exports = {
  commands: 'ping',
  description: 'Bot latency*API Latency',
  callback: (message, arguments, text, client) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp
      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  },
}