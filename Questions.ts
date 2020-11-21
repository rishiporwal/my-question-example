//% color="#AA278D" weight=100
namespace Ask {
    //% block="Question $Question with answer 1 $AnswerOne| and answer 2 $AnswerTwo|is answer 1"
    export function AddQuestion(Question: string, AnswerOne: string, AnswerTwo: string): boolean {
         game.eventContext(); // initialize the game
        control.pushEventContext();
        game.showDialog(Question, "", "A = " + AnswerOne + " B = " + AnswerTwo);
        let answer: boolean = null;
        // short pause so that players don't skip through prompt
        pause(500);

        controller.A.onEvent(ControllerButtonEvent.Pressed, () => answer = true);
        controller.B.onEvent(ControllerButtonEvent.Pressed, () => answer = false);
        pauseUntil(() => answer !== null);
        control.popEventContext();
        return answer;
    }
}