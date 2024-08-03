const defaultUser = {
    name: '',
    email: '',
    permissionLvl: 1
}

const user1 = {
    ...defaultUser,
    name: 'Gabriel',
    email: 'gabriel@vasco.com',
    permissionLvl: 3
}

console.log(user1)