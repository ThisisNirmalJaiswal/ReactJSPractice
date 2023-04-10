import avatar from '../../../assets/react.svg';
export function Person({ name, nickName, images }) {
  // const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h1>{name}</h1>
      <p>Nickname: {nickName || 'shakeAndBake'}</p>
    </div>
  );
}
