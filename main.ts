if (Ask.AddQuestion("1+1", "2", "3")) {
    if (Ask.AddQuestion("5*3", "21", "15")) {
        game.over(false)
    } else {
        if (Ask.AddQuestion("sqrt(144)", "14", "12")) {
            game.over(false)
        } else {
            game.over(true)
        }
    }
} else {
    game.over(false)
}
