export const handleScrollToElement = (id: string) => () => {
  const scrollTargetElement = document.getElementById(id);
  const yOffset = -50;

  if (scrollTargetElement) {
    const y =
      scrollTargetElement.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y - 96, behavior: "smooth" });
  }
};
