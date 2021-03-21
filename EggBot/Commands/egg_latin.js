// scramble
module.exports = {
    name: 'scramble',
    description: 'Egg Latin',
    execute(message) {
        let words = args.split(/\s/);
        for (word of words) {
            word = word.slice(1) + word.substr(0, 1) + "egg";
        }
        message.channel.send(words.join(" "));
    }
}