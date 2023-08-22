// fragment.glsl
varying vec2 vUv;
uniform float time;
uniform vec3 color;

void main() {
  // Paramètres du liquide
  float speed = 1.0; // Vitesse de l'animation
  float amplitude = 0.1; // Amplitude des ondulations
  float frequency = 2.0; // Fréquence des ondulations
  vec2 uv = vUv * vec2(frequency, 1.0);

  // Calcul des coordonnées de texture déformées
  float displacement = sin(uv.x + time * speed) * amplitude;
  vec2 distortedUV = vec2(uv.x, uv.y + displacement);

  // Récupération de la couleur du liquide à partir des coordonnées de texture déformées
  vec4 liquidColor = texture2D(map, distortedUV);

  // Mise à jour de la couleur en fonction du temps
  liquidColor *= color * sin(time * 2.0);

  gl_FragColor = liquidColor;
}