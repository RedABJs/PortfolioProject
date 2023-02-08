export function addAnimationOne(ref, index, animation) {
  ref.current.children[index].children[1].children[1].classList.add(animation);

  switch (index) {
    case 0:
      // Delete
      ref.current.children[1].children[1].children[1].classList.remove(
        animation
      );
      ref.current.children[2].children[1].children[1].classList.remove(
        animation
      );
      break;
    case 1:
      // Delete
      ref.current.children[0].children[1].children[1].classList.remove(
        animation
      );
      ref.current.children[2].children[1].children[1].classList.remove(
        animation
      );
      break;
    case 2:
      // Delete
      ref.current.children[0].children[1].children[1].classList.remove(
        animation
      );
      ref.current.children[1].children[1].children[1].classList.remove(
        animation
      );
      break;
    default:
      console.error("Can't delete animation");
  }
}
export function addAnimationTwo(ref, index, animation) {
  ref.current.children[index].children[1].children[2].classList.add(animation);

  switch (index) {
    case 0:
      // Delete
      ref.current.children[1].children[1].children[2].classList.remove(
        animation
      );
      ref.current.children[2].children[1].children[2].classList.remove(
        animation
      );
      break;
    case 1:
      // Delete
      ref.current.children[0].children[1].children[2].classList.remove(
        animation
      );
      ref.current.children[2].children[1].children[2].classList.remove(
        animation
      );
      break;
    case 2:
      // Delete
      ref.current.children[0].children[1].children[2].classList.remove(
        animation
      );
      ref.current.children[1].children[1].children[2].classList.remove(
        animation
      );
      break;
    default:
      console.error("Can't delete animation");
  }
}

export function addScrollEvent() {
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
    window.scrollY > 0
      ? header.classList.replace("h-16", "h-12")
      : header.classList.replace("h-12", "h-16");
  });
}
