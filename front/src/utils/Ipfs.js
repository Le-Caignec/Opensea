export async function getLeagueIPFSJson(cid) {
    let url = `https://ipfs.io/ipfs/${cid}`
    let response = null
    if (cid !== '') {
      try {
        let res = await fetch(url)
        response = await res.json()
      } catch (error) {
        console.log(error)
      }
    }
    return response
  }
  
  export async function getIPFSImage(cid) {
    let url = `https://ipfs.io/ipfs/${cid}`
    let response = null
    if (cid !== '') {
      try {
        response = fetch(url)
          .then((response) => response.blob())
          .then((myBlob) => {
            return URL.createObjectURL(myBlob)
          })
      } catch (error) {
        console.log(error)
      }
    }
    return response
  }