// scramble
module.exports = {
    name: 'scramble',
    description: 'Egg Latin',
    execute(message, args) {
        for (word of args) {
            word = word.slice(1) + word.substr(0, 1) + "egg";
        }
        message.channel.send(args.join(" "));
    }
}