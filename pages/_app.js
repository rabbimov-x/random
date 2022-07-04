import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import '../styles/globals.css'
import '../styles/globalStill.scss'
import '../styles/modelCarousel.scss'
import '../styles/headerCarousel.scss'
import {store} from "../redux/store";
import {Toaster} from "react-hot-toast";



function MyApp({ Component, pageProps }) {
  return <>
      <Provider store={store} >
          <Component {...pageProps} />
          <Toaster
              toastOptions={{
                  // Define default options
                  className: '',
                  duration: 3000,
                  style: {
                      width: "30%",
                      height: "8vh",
                      background: '#ffce68',
                      color: '#fff',
                  }}}
              position="top-center"
          />
      </Provider>
  </>
}

export default MyApp
