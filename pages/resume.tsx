import Image from "next/image"

const resume = () => {
  return (
    <>
    <iframe src="\resume\CV.pdf" width="1000px" height="1000px"/>
    </>
  )
}

export default resume

/*

    <div className="image-container" style={{width : "20px", height: "20px", position: "relative"}}>
    <Image
      src="/resume/CV.png"
      alt="Profile Image"
      fill
      sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
      priority
    />
    </div>

    */