const player_one = createSorcerer('Gabriel')
const player_two = createBigMonster()


stage.start(
    player_one, 
    player_two, 
    document.querySelector('#char'),
    document.querySelector('#monster')
)