document.addEventListener("DOMContentLoaded", function(){
    
    // AOS
    AOS.init();

    // 마우스 휠 이벤트 (헤더가 휠이 내려갈때는 안보이다가 올라갈때 보이게끔 설정)
    window.addEventListener('wheel', (event)=>{
        const headerArea = document.querySelector(`.header_area`);

        // 세로스크롤에 대한 이벤트 deltaY 가로 = deltaX
        if(event.deltaY > 0){
            // wheel down 
            headerArea.classList.remove(`scroll`)
        } else{
            // wheel up
            headerArea.classList.add(`scroll`)
        }
    });

    // body 에 bg 변경(스크롤 이벤트 offset 값 활용)
    const sec2 = document.querySelector(`.sec_2`);
    const sec3 = document.querySelector(`.sec_3`);

    window.addEventListener('scroll', ()=>{
        const sec2Offset = sec2.offsetTop -500;
        const sec3Offset = sec3.offsetTop;

        const scrollTop = window.scrollY;
        const bodyBg = document.querySelector(`body`);

        if(scrollTop > sec2Offset && scrollTop < sec3Offset){
            bodyBg.classList.add('bg');
        } else{
            bodyBg.classList.remove('bg');
        }
    });
    
    // 과제 : set_4 swiper
    // -> 방향 아래에서 위로 자동으로 올라감
    var swiper = new Swiper(".ceoSwiper", {
        direction: 'vertical',
        autoplay:{ // 재생시간:
          delay: 1500, // 얼마나 : 1.5초
          disableOnInteraction: false, // 다른 인터렉션이 있을 때 자동재생이 멈추는것을 방지 autoplay 설정시 추가로 적용!
        },
        loop: true // 반복
     }); // Swiper_end


    // 과제 : sub_menu
    // -> 데이타 사용해서 서브메뉴 올라갈 때 해당 탭 메뉴 나오게 설정

    // const mainMenu = document.querySelectorAll(`.main_menu li`);
    // const subMenuBox = document.querySelector(`.sub_menu_box`)

    // for (const menu of mainMenu){
    //     menu.addEventListener(`mouseenter`, function(){
    //         subMenuBox.classList.add('active');

    //         const tab = this.getAttribute(`data-tab`);
    //         const subMenu = document.querySelectorAll(`.sub_menu_box ul`);
            
    //         for(const tabs of subMenu){
    //             tabs.classList.remove(`active`);
    //         }
            
    //         const changeTab = document.querySelector(`#${tab}`);
    //         changeTab.classList.add('active');
    //     });
    //     subMenuBox.addEventListener(`mouseleave`, function(){
    //     subMenuBox.classList.remove('active')
    //     });
    // }
    //  --------------풀이
    const subMenuTab = document.querySelectorAll(`.main_menu li`);
    const subMenuBox = document.querySelector(`.sub_menu_box`);

    for(const li of subMenuTab){
        li.addEventListener(`mouseenter`, function(){
        // 마우스를 li에 올리면
            subMenuBox.classList.add('active');
            // 흰색 배경(css active)을 나타나게 해라 

            // 탭메뉴 연결하기
            const tab = this.getAttribute('data-tab');
            // 데이터 불러오기
            const subMenu = document.querySelectorAll(`.sub_menu`);
            for(const tabContent of subMenu){
                tabContent.classList.remove(`active`)
            }

            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add('active');

            // for(const tabContent of subMenu){
            //     tabContent.classList.remove(`active`)
            // }
            // 순서가 제거를 나중에 하게되면 추가가 되기전에 제거를 하게되므로 changeTab 클래스 추가 되기전에 sub_menu를 제거해준다
        });
    };

    // 서브메뉴 박스에서 나가면 기존 상태로 변경
    subMenuBox.addEventListener(`mouseleave`, function(){
        this.classList.remove(`active`)
    });


    // top_btn
    // 스크롤 300px 이상일 때 탑버튼 보여지게 처리
    const topBtn = document.querySelector('.top_btn');
    window.addEventListener('scroll', ()=>{
        const scrollTop = window.scrollY
        console.log(scroll);

        if(scrollTop >= 300){
            topBtn.classList.add('scroll')
        } else{
            topBtn.classList.remove('scroll')
        }
    });

    // 탑버튼 클릭하면 최상단으로이동
    topBtn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });

    // 작은그리드에서 햄버거버튼 클릭하면 메인메뉴 만 출력 : 햄버거 버튼은 위치 값 서로 바뀌도록 처리
    const menuBtn = document.querySelector('#hamburger');
    const mainMenu = document.querySelector('.main_menu');

    // menuBtn.addEventListener('click', ()=>{
    //     mainMenu.classList.toggle('active')
    // });
    menuBtn.addEventListener('click', function(){
        this.classList.toggle(`active`);

        // contains 활용해서 메인메뉴를 메뉴버튼 active 가 있을 때 추가 아니면 제거
        const hasClass = this.classList.contains('active');

        // hasClass가 사실이면
        if(hasClass){
            mainMenu.classList.add(`active`);
        } else{
            mainMenu.classList.remove(`active`);
        }
    })

}); //end