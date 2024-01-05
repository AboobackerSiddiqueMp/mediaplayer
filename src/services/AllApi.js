import { serverUrl } from "./ServerUrl";
import { commonApi } from "./CommonApi";

export const uploaddVideo=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
export const getAllvideo=async(reqBody)=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")

}
export const deletevideo=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}
export const addtoHistory=async(videoDetails)=>{
    return await commonApi('POST',`${serverUrl}/history`,videoDetails)
}
export const getaddtoHistory=async(reqBody)=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}
export const deleteHistory=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}
export const createCategory=async(categoryname)=>{
    return await commonApi('POST',`${serverUrl}/category`,categoryname)

}
export const getAllCategory=async(reqBody)=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
}
export const deleteCategory=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}