(($, window, document, undefined)=>{
    
    class Angency {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();

        }
        header(){

          // 윈도우스크롤이벤트
          // 1. 스크롤탑값이 0이면 -기본 removeClass('addH60');

          // 2. 스크롤 탑값이 0보다 크면 addClass('addH60');
          //  -위방향 
          //     header.removeClass('addShow');
          //     header.removeClass('addHide');
          //     header.removeClass('addShow');

          //  -아래방향 
          //  addClass('addH60');
          //  header.addClass('addHide');
          //  removeClass('addShow');

           let $window = $(window);
           const header = $('#header');
           let newScrTop = $window.scrollTop();
           let oldScrTop =newScrTop;
           let result ='';

          //  윈도우스크롤이벤트 $window.scroll();
          // 스크롤이벤트
           $window.scroll(()=>{
              if($window.scrollTop() == 0){
                header.removeClass('addH60');
                header.removeClass('addHide');
                header.removeClass('addShow');
              }
              else{
                header.addClass('addH60');

                // 아래방향
                // 위방향
                // 지금 스크롤탑값 새로운 탑값을 가져오기 newScrTop = $window.scrollTop();
                // 나중에 스크롤탒값 이전 탑값을 가져오기 oldScrTop = newScrTop;

                newScrTop = $window.scrollTop(); 
                // 방향을 이 사이에서 구한다
                // 계산값이 0보다 크면 위, 0보다 작으면 아래
                result  = oldScrTop- newScrTop > 0 ? 'UP' : 'DOWN';

                // %d 정수 (10진수) :Decimal
                // %s 문자열:string
                // console.log( 'oldScrTop: %d, newScrTop: %d,  result: %s  ',oldScrTop, newScrTop,  result);
                
                if(result=='UP'){
                  header.addClass('addShow');
                  header.removeClass('addHide');
                }
                if(result=='DOWN'){
                  header.removeClass('addShow');
                  header.addClass('addHide');
                }
                oldScrTop = newScrTop;

              }
           });

           



            // 메인버튼 이벤트
            const mainBtn = $('.main-btn');
      const sub = $('.sub');
      const nav = $('#nav');
      const subBtn = $('.sub-btn');
      const subSub = $('.sub-sub');

            //메인메뉴-서브메뉴
            mainBtn.on({
              mouseenter(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(e){
                const $this = $(this);
                      sub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });

            nav.on({
              mouseleave(){
                sub.stop().fadeOut(300);
                subSub.stop().fadeOut(300);
              }
            });


            //서브메뉴-서브서브메뉴
            subBtn.on({
              mouseenter(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              },
              focusin(){
                const $this = $(this);
                      subSub.stop().fadeOut(0);
                      $this.next().stop().fadeIn(300);
              }
            });

        }
        section1(){
          let cnt= 0;
          const slideWrap= $('.slide-wrap');
          const slideView= $('.slide-view');

          function mainSlide(){
            slideWrap.stop().animate({left:-1403*cnt}, 600, 'easeInOutExpo',()=>{
              if(cnt>2){cnt=0}
              if(cnt<0){cnt=2}
              slideWrap.stop().animate({left:-1403*cnt}, 0);
            })
          }
          function nextCount(){
            cnt++;
            mainSlide();
          }
          function prevCount(){
            cnt--;
            mainSlide();
          }
          // setInterval(prevCount,3000);


          // 스와이프(좌우터치이벤트)
          // 오른쪽에서 왼쪽으로 터치 : 다음슬라이드 0>
          // 왼쪽에서 오른쪽으로 터치: 이전 슬라이드 <0
          let s = null;
          let e = null;
          let dE = null;
          let dS = null;
          let mD = null;
          slideView.on({
            mousedown(event){
              // console.log('터치시작:',e.clientX);
              s = event.clientX;
              dS = event.clientX - slideWrap.offset().left-1403 ;
              mD = true;
            },
            mouseup(event){
              e = event.clientX;
              if((s-e)>0){ /* 시작좌표-종료좌표 >0 보다 크면 다음슬라이드 */
                nextCount();
              }
              if((s-e)<0){/* 시작좌표-종료좌표 <0 보다 작으면 다음슬라이드 */
                prevCount();
              }
            },
            mousemove(e){ /* 드래그 앤 드롭 (물체를 잡고 끌고 가는거를 실제로 구현) */
              // 반드시 마우스 다운(mouseDown)이 이루어져야 실행한다
              if(!mD){return}
              dE = e.clientX;
              slideWrap.css({left:dE-dS});
            }
          });




        }
        section2(){

        }
            
        section3(){
            
        }
        section4(){
            
        }
        section5(){
            
        }
        section6(){
            
        }
        section7(){
            
        }
        section8(){
            
        }
        section9(){
            
        }
        section10(){
            
        }
        footer(){

        }

    }
    const newAngency = new Angency();
         newAngency.init();
})(jQuery, window, document);