import THREE from 'three.js';
import PolyhedronGeometryDescriptorBase from './PolyhedronGeometryDescriptorBase';

class OctahedronGeometryDescriptor extends PolyhedronGeometryDescriptorBase {
  construct(props) {
    const {
      radius,
      detail,
      } = props;

    return new THREE.OctahedronGeometry(radius, detail);
  }
}

export default OctahedronGeometryDescriptor;
