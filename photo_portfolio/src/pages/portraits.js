import Image from "next/image";

const portraits = () => {
  return (
    <div className="portraits">
      <h1>Portraits</h1>
      <div className="row">
        <div className="column">
          <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718527/Abbey5_vzj94c.jpg" />
          <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718530/DSC_2575BW_awaaia.jpg" />
          <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718793/Edit2_sb4xum.jpg" />
        </div>
      </div>
      <div>
        <p>Portraits descriptios text</p>
      </div>
      <div className="row">
        <div className="column">
        <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718527/Abbey5_vzj94c.jpg" />
        <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718745/DSC_7641Edit_ky4mp2.jpg" />
        <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718745/DSC_7641Edit_ky4mp2.jpg" />
        <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718792/DSC_7789Edit_h1o9p0.jpg" />
        </div>
      </div>
    </div>
  );
};

export default portraits;
