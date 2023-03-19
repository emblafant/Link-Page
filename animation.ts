export const handleAnimation = ((event:any, animation:string) => {
  const target = event.target;

  target.classList.add(animation);
  setTimeout(()=>{target.classList.remove(animation)}, 1000);
})