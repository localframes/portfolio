var m_currentIndexN = 0;
var m_prevIndex = 0;

function SlideByKey()
{
  var x = event.which || event.keyCode;

  if(x == 39) SetNextIndex(1);
  else if(x==37) SetNextIndex(-1);
}

function SetNextIndex(dir)
{
  ShowandHide(dir);
}

function SetNextIndexbyPosition(event)
{

  var xCoordinate;
  
  // If device is a touch screen device
  if ('ontouchstart' in window)
  {
    alert("Ege");
;    xCoordinate = event.touches[0].clientX;
  }
  else
  {
    alert("EFE");
    xCoordinate = event.clientX;
  }
  
  var direction = FindPosition(xCoordinate);
  ShowandHide(direction);
}

function ShowandHide(dir)
{
  var direction = dir;
  var slideList = document.getElementsByClassName("single-slide");
  var length = slideList.length;
  
  m_prevIndex = m_currentIndexN;
  m_currentIndexN += direction; 

  if(m_currentIndexN >= length)
  {
    m_currentIndexN = 0;
  }
  
  if(m_currentIndexN < 0)
  {
    m_currentIndexN = length - 1;
  }
  
  slideList[m_currentIndexN].classList.remove("hide");
  slideList[m_currentIndexN].classList.add("show");

  slideList[m_prevIndex].classList.remove("show");
  slideList[m_prevIndex].classList.add("hide");
}

function FindPosition(x)
{
  var size = document.body.clientWidth;
  if( x >= (size /2)){ return 1;} else { return -1;}
}

function StartAutoSlideShow()
{
 // PlusSlides(1);
 SetNextIndex(1);
 setTimeout(StartAutoSlideShow, 3000);

}