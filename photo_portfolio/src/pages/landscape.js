import Image from "next/image";

const landscape = () => {
    return (
        <div className="landscape">
            <h1>Landscape</h1>
            <div className="row">
                <div className="column">
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684811073/DSC_5268Edit_e2robj.jpg" width={500}  height={500} />
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684811069/DSC_3614Edit_qyfzjs.jpg" width={500}  height={500} />
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684811025/DSC_5272Edit_czv8ml.jpg" width={500}  height={500} />
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684810975/DSC_5289Edit_zdvi6i.jpg" width={500}  height={500} />
                </div>
                <div className="column">
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684811054/DSC_5495Edit_l29sln.jpg" width={500}  height={500} />
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684811049/DSC_2505Edit_zsbsf3.jpg" width={500}  height={500} />
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684811015/DSC_6275Edit_fpvo4i.jpg" width={500}  height={500} />
                    <Image src="https://res.cloudinary.com/alidevcloud/image/upload/v1684811040/DSC_2319Edit_pzxvmc.jpg" width={500}  height={500} />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    {/* <Image src="https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                    <Image src="https://plus.unsplash.com/premium_photo-1668017179071-2d0d1b3c9066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" />
                    <Image src="https://images.unsplash.com/photo-1586783509992-bcfa7fe443b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                    <Image src="https://images.unsplash.com/photo-1533577083121-c9bd0b0f32fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                    <Image src="https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                    <Image src="https://plus.unsplash.com/premium_photo-1668017179071-2d0d1b3c9066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" /> */}
                </div>
            </div>
        </div>
    );
}
 
export default landscape;