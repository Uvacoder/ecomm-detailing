import React from 'react';
import Link from 'next/link';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import cover from '../../assets/imgs/fullIntExCover.webp';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let images = importAll(require.context('../../assets/imgs/pageimgs/interior', false, /\.(webp|jpe?g|svg)$/));
images = Object.values(images)

export default function FullIntGallery() {

  let imagery = images.map((pic, id) => {
    let width = pic.match(/[0-9]+/gm)
    let height = pic.match(/(x)(\d+)/)
    
    return <Item key={id} original={images[id]} thumbnail={images[id]} width={width[0]} height={height[2]}>
        {({ ref, open }) => (
        <img className="gallery-image" alt={'full interior cleaning example ' + id} ref={ref} onClick={open} src={images[id]} />
      )}
    </Item>
  
  })

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <header>
        <h1 className='servicepage-heading'>Full Interior Cleaning Gallery</h1>
        <p>We have cleaned it all, and this is a gallery to show what we can do to even the worst of interiors. Take a look at our <Link href="/full-int-ex" className='gallery-link' >Full Interior Cleaning</Link> page to find out more</p>
      </header>

      <Gallery>
        <div className="gallery-container">
          {imagery}
        </div>
      </Gallery>
    </section>
  )
}
