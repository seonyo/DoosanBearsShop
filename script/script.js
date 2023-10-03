document.addEventListener("DOMContentLoaded", function() {
    // HTML에서 .slide 클래스를 가진 모든 이미지 요소들을 선택합니다.
    const slides = document.querySelectorAll('.slide');

    // 현재 표시되고 있는 슬라이드의 인덱스를 기억합니다.
    let currentSlide = 0;
    
    // 초기에 첫 번째 슬라이드를 표시합니다.
    showSlide(currentSlide);

    // 지정한 인덱스에 해당하는 슬라이드만 보여주는 함수입니다.
    function showSlide(index) {
        slides.forEach((slide, i) => { //slide를 순회함
            if (i === index) {  //i와 index가 같다면
                slide.style.display = 'block'; //block (보이기)
            } else {
                slide.style.display = 'none'; //아니면 none(안보이기)
            }
        });
    }

    // 이전 또는 다음 슬라이드로 이동하는 함수입니다.
    function changeSlide(direction) {
        currentSlide = parseInt(direction);
        switch(direction){
            case '0' : case'1' : case '2': case '3' : 
             currentSlide = (currentSlide + 1) % slides.length-1;
            break;
            case '4' : currentSlide=4;
            break;
        }
        showSlide(currentSlide);
        updateButtonStyles();
        console.log(currentSlide);
    }

    function updateButtonStyles() {
        const buttons = document.querySelectorAll(`.slideBtn`);
        buttons.forEach((button, i) => {
            if (i === currentSlide) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // "이전" 버튼 클릭 시 이전 슬라이드로 이동합니다.
    document.getElementById('0').addEventListener('click', function() {
        changeSlide('0');
    });

    // "다음" 버튼 클릭 시 다음 슬라이드로 이동합니다.
    document.getElementById('1').addEventListener('click', function() {
        changeSlide('1');
    });
       // "다음" 버튼 클릭 시 다음 슬라이드로 이동합니다.
       document.getElementById('2').addEventListener('click', function() {
        changeSlide('2');
    });
       // "다음" 버튼 클릭 시 다음 슬라이드로 이동합니다.
       document.getElementById('3').addEventListener('click', function() {
        changeSlide('3');
    });
    document.getElementById('4').addEventListener('click', function() {
        changeSlide('4');
    });

    updateButtonStyles();

    // 2초마다 자동으로 다음 슬라이드로 전환하는 타이머를 설정합니다.
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length; // 0, 1, 2, 3, 4 순환하도록 수정
        showSlide(currentSlide);
        updateButtonStyles();
    }, 4000);
});


document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.main-box > div');

    // 투명도를 조절하여 요소가 나타나게 하는 함수
    function fadeIn(box) {
        box.style.opacity = '1';   // 투명도 1은 다 보임
    }

    // 각 상자가 순서대로 나타나도록 애니메이션 적용
    function animateBoxes(index) {
        if (index < boxes.length) {
        // 인덱스가 상자 배열의 길이보다 작을 때만 실행
            // 0.3초 후에 현재 인덱스에 해당하는 상자를 나타내는 애니메이션 실행            
            setTimeout(function() {
                fadeIn(boxes[index]);
                // 다음 상자로 재귀 호출하여 0.3초 간격으로 애니메이션 계속 진행
                animateBoxes(index + 1);
            }, 300); // 0.3초 간격으로 애니메이션 실행
        }
    }

    // 스크롤 이벤트를 처리하는 함수
    function handleScroll() {
        // 스크롤 이벤트가 발생하면 각 상자들을 순차적으로 나타내는 애니메이션 실행
        animateBoxes(0);
    }

    // 스크롤 이벤트 리스너를 등록하여 스크롤 시 handleScroll 함수를 실행합니다.
    window.addEventListener('scroll', handleScroll);
});

// 모든 .item 요소를 선택합니다.
const itemElements = document.querySelectorAll('.item');

// 각 .item 요소에 대해서 처리합니다.
itemElements.forEach((item) => {
    const pElements = item.querySelectorAll('p'); // .item 내의 모든 p 태그를 선택합니다.

    pElements.forEach((p) => {
        const text = p.innerText; // 현재 p 태그의 텍스트 내용을 가져옵니다.
        if (text.length > 23) { // 텍스트 길이가 23보다 길 경우
            const truncatedText = text.substring(0, 23) + '...'; // 23글자 이후를 "..."으로 대체합니다.
            p.innerText = truncatedText; // 새로운 텍스트로 대체합니다.
        }
    });
});
