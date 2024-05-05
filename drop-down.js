/**
 * Creates a functional drop down menu given html elements and target path.
 *
 * Accepts an array of menu option objects in the format:
 *
 * {
 * id: <selector id>
 * href: <rel path to target>
 * }
 */
export const initDropdown = (menuOptions) => {
  const dropDownMenu = document.getElementById('drop-icon');
  dropDownMenu.addEventListener('click', () => {
    hideMenu();
  });

  dropDownMenu.addEventListener('mouseover', () => {
    showMenu();
  });
  dropDownMenu.addEventListener('mouseout', () => {
    hideMenu();
  });

  menuOptions.forEach((element) => {
    linkButton(element.id, element.href);
  });
};

function linkButton(buttonElementId, href) {
  console.log('Linking button with id: ' + buttonElementId);
  const button = document.getElementById(buttonElementId);
  button.addEventListener('click', () => {
    window.location.href = href;
  });
}

function showMenu() {
  const dropMenu = document.querySelector('.drop-menu');
  if (!dropMenu.classList.contains('visible')) {
    dropMenu.classList.add('visible');
  }
}

function hideMenu() {
  const dropMenu = document.querySelector('.drop-menu');
  if (dropMenu.classList.contains('visible')) {
    dropMenu.classList.remove('visible');
  }
}
