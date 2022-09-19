function solve(dehidraworker) {
    
    let weight = dehidraworker.weight;
    let experience = dehidraworker.experience;
    let levelOfHydrated = dehidraworker.levelOfHydrated;
    let dizziness = dehidraworker.dizziness;
    if (dizziness) {
        levelOfHydrated = weight * 0.1 * experience;
        dizziness = false
    }
    let HidratatedWorker = { weight, experience, levelOfHydrated, dizziness};
    return HidratatedWorker;    
}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })