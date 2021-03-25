module.exports = {
    name: 'echo',
    description: 'Echo text',
    execute(message, args) {
        message.channel.send(args.join(" "));
    }
}