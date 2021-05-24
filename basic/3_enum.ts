enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  VK = 'Vkontakte',
  Facebook = 'Facebook',
  Instagram = 'Instagram'
}


const social = SocialMedia.VK

console.log(social);
