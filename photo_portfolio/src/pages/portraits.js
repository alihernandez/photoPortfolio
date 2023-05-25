import Image from "next/image";

const portraits = () => {
  return (
    <div className="grid">
      <div className="card">
        <Image
          src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718527/Abbey5_vzj94c.jpg"
          width={414}  height={414}
        />
        </div>
        <div className="card>">
        <Image
          src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718530/DSC_2575BW_awaaia.jpg"
          width={414}  height={414}
        />
         </div>
        <div className="card">
        <Image
          src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718793/Edit2_sb4xum.jpg"
          width={414}  height={414}
        />
        </div>
        <div className="card">
        <Image
          src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718768/DSC_7378Edit_qtovtm.jpg"
          width={414}  height={414}
        />
        </div>
        <Image
          src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718745/DSC_7641Edit_ky4mp2.jpg"
          width={414}  height={414}
        />
        <div className="card">
        <Image
          src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718547/DSC_0521_oldvm4.jpg"
          width={414}  height={414}
        />
        </div>
        <div className="card">
        <Image
          src="https://res.cloudinary.com/alidevcloud/image/upload/v1684718792/DSC_7789Edit_h1o9p0.jpg"
          width={414}  height={414}
        />
      </div>
    </div>
  );
};

export default portraits;
