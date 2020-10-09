//virtualNode generatorius
export default function hyperscript(nodeNameOrComponent, attributes = {}, ...children) {
    return {
        nodeNameOrComponent,
        attributes,
        children
    }

}

// createhyperScript suformuluoja objekta kuri create node atpazysta