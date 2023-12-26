

const base = /* css */ `
.options {
  position: absolute;
  top: 58px;
  width: 100%;
  z-index: 10100;
  background-color: white;
}
.select:has(.initial) .options {
  display: none;
  opacity: 0;
}
.select:has(.blur) .options {
  animation: blur 0.3s forwards;
}
.select:has(.focus) .options {
  animation: focus 0.3s forwards;
}
@keyframes focus {
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
@keyframes blur {
  0% {
    display: block;
    opacity: 1;
  }
  100% {
    display: none;
    opacity: 0;
  }
}

.selected {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 10px;
}
.select-outline {
}
.select:not(.focus) .select-outline {
  border: black solid 1px;
}
.select.focus .select-outline {
  border: blue solid 1px;
}

.option {
  padding: 4px 10px;
  width: 100%;
}
.option:hover {
  padding: 4px 10px;
  background-color: lightgray;
}

.select.focus .blur-background {
  background-color: transparent;
  position: fixed;
  inset: 0;
  z-index: 10000;
}

.select:not(.material) .select-input {
  top: 50%;
  transform: translateY(-50%);
}
.select:not(.material) .inside-placeholder {
  display: none;
}
.select.material .outside-placeholder {
  display: none;
}

.material-form-item {
  position: relative;
  height: 58px;
}
.material-form-item-outline {
  position: absolute;
  border: black solid 1px;
  inset: 0;
  pointer-events: none;
}
.material-form-item-input {
  position: absolute;
  margin-left: 10px;
  inset: 0;
}
.material-form-item .material-form-item-placeholder {
  position: absolute;
  margin-left: 10px;
  transition: 0.3s;
  transform-origin: 0;
  pointer-events: none;
}

.material-form-item:not(:has(.material-form-item-input:focus)):not(
    :has(.material-form-item-input.focus)
  )
  .material-form-item-placeholder,
.material-form-item:has(.material-form-item-input:placeholder-shown)
  .material-form-item-placeholder,
.material-form-item:has(.material-form-item-input.placeholder-shown)
  .material-form-item-placeholder {
  top: 50%;
  transform: translateY(-50%);
}

.material-form-item:has(.material-form-item-input:focus)
  .material-form-item-placeholder,
.material-form-item:has(.material-form-item-input.focus)
  .material-form-item-placeholder,
.material-form-item:not(:has(.material-form-item-input:placeholder-shown)):not(
    :has(.material-form-item-input.placeholder-shown)
  )
  .material-form-item-placeholder {
  top: -12px;
  transform: scale(0.8);
}
`

export const selectStyles = () => {
  const styles = [base]
  return styles
}
