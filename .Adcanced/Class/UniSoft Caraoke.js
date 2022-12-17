function solve(params) {
    let participant = params.shift().split(', ');
    let songs = params.shift().split(', '); 
    let token = params.shift().split(', ')
    let command = token[0];
    let Inf = {}
    
    while (command !== 'dawn') {
        let song = token[1];
        let award = token[2];
        if (songs.includes(song) && participant.includes(command) && !Inf.hasOwnProperty(command)) {
            Inf[command] = {
                award : [award],
            }
        } else if (Inf.hasOwnProperty(command) && songs.includes(song) && !Inf[command].award.includes(award)) {
            Inf[command].award.push(award)
        } 
        token = params.shift().split(', ')
        command = token[0];
    }   
    //console.log(Inf);
    if (Object.entries(Inf).length > 0) {
    Object.keys(Inf) 
    .sort((a,b) => Object.values(Inf[b])[0].length - Object.values(Inf[a])[0].length)
    .forEach(participant => {
        let award = Object.values(Inf[participant])[0] 
        award = [...new Set(award)]
        let countParticipant = Object.values(Inf[participant])[0].length;
        console.log(`${participant}: ${countParticipant} awards`);
        award.sort((a,b) => a.localeCompare(b)).forEach(v => {
            console.log(`--${v}`); 
        })
    })
} else {
    console.log(`No awards`);
}

}
solve(['Trifon, Vankata, Gesha',
    'Dragana - Kukavice, Bon Jovi - Its my life, Lorde - Royals',
    'Gesha, Bon Jovi - Its my life, Best Rock',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'])