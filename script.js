const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 뱀의 초기 설정
let snake = [{x: 100, y: 100}];
let direction = 'right';

// 사과의 초기 설정
let food = {x: Math.floor(Math.random() * 28) * 10, y: Math.floor(Math.random() * 28) * 10};

// 게임 루프
function draw() {
    // 화면 지우기
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 뱀 그리기
    ctx.fillStyle = 'green';
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
    }

    // 사과 그리기
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 10, 10);

    // 뱀 이동
    let head = {...snake[0]};
    switch (direction) {
        case 'right':
            head.x += 10;
            break;
        // ... 다른 방향들도 추가
    }
    snake.unshift(head);

    // ... 나머지 로직 (충돌 처리, 게임 오버 등)

    // 게임 루프 반복
    setTimeout(draw, 100);
}

// 키보드 이벤트 처리
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        // ... 다른 방향들도 추가
    }
});

// 게임 시작
draw();
