let myForm = document.getElementById("myForm")

let synth = new Tone.Synth().toDestination()

function onSubmit (e) {
    e.preventDefault()

    synth.triggerAttack(myForm.elem ents["yourName"].value)
    let duration = parseFloat (myForm.elements["duration"].value)

synth.triggerRelease(Tone.now() + duration)
}

myForm.addEventListener("submit" , onSubmit)