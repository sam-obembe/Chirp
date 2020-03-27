export interface Chirp {
  userId:string,
  chirpId?:string,
  chirp:string,
  imgUrls:string[],
  replying:string,
  likers?:string[],
}

