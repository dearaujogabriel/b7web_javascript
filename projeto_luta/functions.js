const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: l,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8,
    }
}

const createSorceres = (name) => {
    return {
        ...defaultCharacter,
        name, 
        life: 80,
        maxLife: 80,
        attack: 14,
        defense: 4
    }
}