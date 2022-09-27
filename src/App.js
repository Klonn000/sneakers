import React from 'react';
// import { ReactDOM } from 'react-dom';
import './index.scss'

function App() {
  return (
    <div className="App">
       <header>
        <div className='headerLeft'>
          <img width={40} height={40} src='/img/logo.png' alt='img'/>
          <div className='headerInfo'>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <img className='pointer' width={18} height={18} src='/img/cart.svg' alt='img'/>
            <span>1205 грн.</span>
          </li>
          <li>
            <img className='pointer' width={18} height={18} src='/img/heart.svg' alt='img'/> 
          </li>
          <li>
            <img className='pointer' width={18} height={18} src='/img/user.svg' alt='img'/> 
          </li>
        </ul>
       </header>

       <div className='baner_wrapper'>
        <div className='baner'>
          <img src='img/baner.png' alt='img'/>
        </div>
       </div>

       <div className='main_wrapper'>
        <main className='main'>
          <div className='main_preview'>
            <h1>Все кроссовки</h1>
            <form action='' method='get'>
              <input type='text' name='search' placeholder='&#128269; Поиск' />
            </form>
          </div>

          <div className='main_catalog'>
            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers.jpg' />
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>12 999 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers1.jpg' />
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>12 999 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers2.jpg' />
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>8 499 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers3.jpg' />
              <p>Кроссовки Puma X Aka Boku Future Rider</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>8 999 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers4.jpg' />
              <p>Мужские Кроссовки Under Armour Curry 8</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>15 199 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers5.jpg' />
              <p>Мужские Кроссовки Nike Kyrie 7</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>11 299 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers6.jpg' />
              <p>Мужские Кроссовки Jordan Air Jordan 11</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>10 799 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers7.jpg' />
              <p>Мужские Кроссовки Nike LeBron XVIII</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>16 499 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers8.jpg' />
              <p>Мужские Кроссовки Nike Lebron XVIII Low</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>13 999 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers9.jpg' />
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>8 499 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers10.jpg' />
              <p>Кроссовки Puma X Aka Boku Future Rider</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>8 999 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>

            <div className='main_cart'>
              <img src='img/headersneakers.svg' className='sneakers_heart' />
              <img src='img/sneakers11.jpg' />
              <p>Мужские Кроссовки Nike Kyrie Flytrap IV</p>
              <div className='main_cart_price'>
                <p>Цена: </p>
                <span>11 299 грн</span>
                <button>
                  <img src='img/btn.png'></img>
                </button>
              </div>
            </div>
          </div>
        </main>
       </div>
    </div>
  );
}

export default App;
