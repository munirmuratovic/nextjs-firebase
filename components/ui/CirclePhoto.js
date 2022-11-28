import Image from "next/image";

const CirclePhoto = ({ src, alt }) => {
  return (
    <div className="block relative cursor-pointer">
      <div className="relative h-10 w-10">
        <>
          {src && (
            <>
              <div className="circle-photo"></div>
              <Image
                className="mx-auto object-cover rounded-full h-16 w-16 "
                src={src}
                layout="fill"
                objectFit="contain"
                alt={alt}
              />
            </>
          )}
          {!src && (
            <div className="mx-auto p-4 shadow-sm bg-purple-500 h-10 w-10 rounded-full"></div>
          )}
        </>
      </div>
    </div>
  );
};
export default CirclePhoto;
