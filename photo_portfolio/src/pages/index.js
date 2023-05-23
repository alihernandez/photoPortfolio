import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kingsland Photography</title>
        <meta name="description" content="Kingsland Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
        <div className="blob"></div>
        <div className="bio">
          <Image
            id="bioPic"
            width={500}
            height={500}
            src="https://res.cloudinary.com/alidevcloud/image/upload/c_scale,w_2985/v1684717511/DSC_7848Edit_ayqrkt.jpg"
          />
          <h1>Haley Abrams</h1>
          <article>
            Born Fort Collins, Colorado, USA, 1993 2015 Bachelors in Fine Arts
            from The School of the Art Institute of Chicago Haley Abrams is a
            commercial photographer and videographer born and raised in Fort
            Collins, Colorado. She moved to Chicago in 2012 to attend The School
            of the Art Institute and will complete her Bachelors in Fine Arts in
            May of 2015. She combines her artistic eye with her talent for
            commercial-based shooting to create outstanding and unusual images.
            Her interest in photography was sparked at the young age of 12
            years. A combination of community participation as well as
            enrollment in AP Art in high school aided in her admission to the
            School of the Art Institute of Chicago with a portfolio based merit
            scholarship. Since attendance at SAIC, she has focused her portfolio
            work primarily on commercial projects and portraiture. Her work
            intends to redefine the reputation of commercial photography by
            creating images that consciously reflect artistic techniques to
            create advertisements as high art. She focuses on shooting on
            location in exotic places as well as in the studio, incorporating
            sophisticated props and materials to create stunning images that go
            beyond traditional advertising.
          </article>
          <div className="contact">
            <h2>Contact me today!</h2>
            <form>
              <label>Name:</label>
              <input type="text"></input>
              <label>Email:</label>
              <input type="text"></input>
              <label>Phone:</label>
              <input type="number"></input>
              <label>Message:</label>
              <textarea type="text"></textarea>
             
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
