import kaboom from "kaboom"
import "kaboom/global"

// initialize context
kaboom({
    background: [255, 225, 102, ]
})

// load assets
loadSprite("bean", "sprites/bean.png")
loadSprite("coronavirus", "sprites/coronavirus.png");
loadSound("success-fanfare-trumpets-6185", "sounds/success-fanfare-trumpets-6185.mp3");
loadSound("score", "sounds/score.mp3");
loadSound("jump", "sounds/jump.wav");
loadSound("gover", "sounds/gover.mp3");
loadSound("die", "sounds/die.wav");
loadSound("tunetank", "sounds/tunetank.com_5709_fire-cocktail_by_alexey-anisimov.mp3");
loadSprite("syringe", "sprites/syringe.png");
loadSprite("mask", "sprites/mask.png");
loadSprite("man", "sprites/man.png");
let bspeed = 2;
let speed = 320;
let bg = false;
let pausegame = false;
let gameover = false;
const player = add([
    sprite("mask"),
    pos(80, 40),
    scale(0.13),
    area(),
]);
const score = add([
    text("Unused Dose: 0"),
    pos(80, 40),
    {
        value: 0
    },
])
const active = add([
    text("Active Dose: 0"),
    pos(400, 40),
    {
        value: 0
    },
])
player.onKeyPress('u', () => {
   if(score.value>0){
      score.value -= 1;
    score.text = "Unused Dose: " + score.value;
    active.value += 1;
    console.log(player.pos)
    active.text = "Active Dose: " + active.value;
    if (bspeed <= 10) {
        bspeed += 1;
    }
  if(active.value>=2){
    player.use(sprite("man"))
  }else{
    player.use(sprite("mask"))
  }
   }
})
player.onKeyDown('up', () => {
    if (!bg) {
        play("tunetank", {
            volume: 0.3
        })
        bg = true;
    }
    player.move(0, -speed)
});
player.onKeyDown('down', () => {
    if (!bg) {
        play("tunetank", {
            volume: 0.3
        })
        bg = true;
    }
    player.move(0, speed)
});
player.onKeyDown('left', () => {
    if (!bg) {
        play("tunetank", {
            volume: 0.3
        })
        bg = true;
    }
    player.move(-speed, 0)
});
player.onKeyDown('right', () => {
    if (!bg) {
        play("tunetank", {
            volume: 0.3
        })
        bg = true;
    }
    player.move(speed, 0)
});

loop(2, () => {
    let e = add([
        sprite("coronavirus"),
        scale(0.13),
        pos(rand(vec2(width(), height()))),
        area(),
        "covid",
    ]);
    e.onUpdate(() => {
        e.moveTo(e.pos.x, e.pos.y - bspeed);
    })
})
loop(2, () => {
    if (!gameover) {
        let e = add([
            sprite("coronavirus"),
            scale(0.13),
            pos(rand(vec2(width(), height()))),
            area(),
            "covid19",
        ]);
        e.onUpdate(() => {
            e.moveTo(e.pos.x - bspeed, e.pos.y);
        })
    }
})
loop(4, () => {
    if (!gameover) {
        let e = add([
            sprite("syringe"),
            scale(0.13),
            pos(rand(vec2(width(), height()))),
            area(),
            "vaccine",
        ]);
        e.onUpdate(() => {
            e.moveTo(e.pos.x - bspeed, e.pos.y);
        })
    }
});
player.onCollide("covid", (covid) => {
  if(active.value>=2){
    player.use(sprite("man"))
    destroy(covid)
  }else{
    player.use(sprite("mask"))
  }
    if (score.value >= 100) {
        bspeed = 10;
        gameover = true;
      play("tunetank", {
            volume: 0.7
        })
        player.moveTo(575.9987199999995, 408.00224000000014)
        add([
            text("You Won"),
            pos(554.6831999999997, 546.6422400000006),
            {
                value: 0
            },
        ]);
    }
    if (active.dose >= 2) {
        destroy(covid)
    } else {
      if(!score.value>=100){
        destroy(player)
        volume(0.1)
        gameover = true;
        play("gover")
        bspeed = 10;
          add([
            text("Game Over"),
            pos(554.6831999999997, 546.6422400000006),
            {
                value: 0
            },
        ]);
        }
    }
})
player.onCollide("covid19", (covid19) => {
  if(active.value>=2){
    player.use(sprite("man"))
  }else{
    player.use(sprite("mask"))
  }
    if (score.value >= 100) {
        volume(0.1);
        play("tunetank", {
            volume: 0.7
        })
        bspeed = 10;
        gameover = true;
        player.moveTo(575.9987199999995, 408.00224000000014)
        add([
            text("You Won"),
            pos(554.6831999999997, 546.6422400000006),
            {
                value: 0
            },
        ]);
    }
    if (active.dose >= 2) {
        destroy(covid19)
    } else {
        destroy(player)
        volume(0.1)
        gameover = true;
        play("gover")
        bspeed = 10;
        if(!score.value>=100){
          add([
            text("Game Over"),
            pos(554.6831999999997, 546.6422400000006),
            {
                value: 0
            },
        ]);
        }
    }
})
player.onCollide("vaccine", (vaccine) => {
    play("score")
    score.value += 1;
    score.text = "Unused Dose: " + score.value
    destroy(vaccine)
    console.log("Crash")
});
function cheatgame(){
  score.value +=120;
  score.text = "Unused Dose: "+score.value;
}
