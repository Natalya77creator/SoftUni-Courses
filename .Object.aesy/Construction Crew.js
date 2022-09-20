function solve(dehidraworker) {
    
    let HidratatedWorker = 
    {   weight : dehidraworker.weight, 
        experience : dehidraworker.experience, 
        levelOfHydrated : dehidraworker.levelOfHydrated, 
        dizziness : dehidraworker.dizziness,
        if (dizziness) {
            levelOfHydrated = weight * 0.1 * experience;
            dizziness = false
        }
    };
    return HidratatedWorker;    
}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })