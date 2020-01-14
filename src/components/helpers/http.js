const sendRequest = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return res
}

export const handleSubmit = async dataObj => {
  const data = { ...dataObj }

  const res = await sendRequest(
    'https://hook.integromat.com/c4imvqj7kp8ixzlkkzzqarr5urqqm16y',
    data,
  )

  if (res.ok) {
    return 'メッセージを送信しました。'
  }

  const errorData = {
    location: 'OliAncho-LP',
    status: res.status,
    message: await res.text(),
    data,
  }
  console.log(errorData)
  const errorHandleRes = await sendRequest(
    'https://hook.integromat.com/gw1p8kleez6bnajn4ehglfrxo9kxjvcz',
    errorData,
  )
  if (errorHandleRes.ok) {
    return 'メッセージを送信しました。'
  }

  throw new Error()
}
