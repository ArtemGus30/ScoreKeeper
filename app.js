const p1AddScore = document.querySelector('#p1AddScore');
const p2AddScore = document.querySelector('#p2AddScore');
const reset = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winnigScore = 3;

p1AddScore.addEventListener('click', function () {
    if (p1Score !== winnigScore) {
        p1Score++;
        if (p1Score === winnigScore) {
            p1Display.classList.toggle('winner');
            p2Display.classList.toggle('loser');
            p1AddScore.disabled = true;
            p2AddScore.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})
p2AddScore.addEventListener('click', function () {
    if (p2Score !== winnigScore) {
        p2Score++;
        if (p2Score === winnigScore) {
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p1AddScore.disabled = true;
            p2AddScore.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener('click', resetAll);

function resetAll() {
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('loser', 'winner');
    p1AddScore.disabled = false;
    p2AddScore.disabled = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    winningScore = 3;
}

winningScoreSelect.addEventListener('change', function () {
    winnigScore = parseInt(this.value);
    resetAll();
})




