import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';


export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.ily.aora",
    projectId: "6703e4550023cbd9b26a",
    databaseId: "6703e5f80018ef5b0e0b",
    userCollectionId: "6703e61a000eedd93b3a",
    videoCollectionId: "6703e63b00138b2bf8ff",
    storageId: "6703e7b8000a0f809ffd"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      throw error;
    }
  }


export const signIn = async (email, password) =>{
    try {
        const session = await account.createEmailPasswordSession(email, password);
    
        return session;
    } catch (error) {
        throw error;
    }
}

export const getCurrentUser = async () => {
    try {
        const session = await account.getSession("current");

        if (session) {
          return session;
        }

        const currentAccount = account.get();

        if(! currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal("accountId", (await currentAccount).$id)]
        )

        if(! currentUser) throw Error;
        
        return currentUser.documents[0];

    } catch (error) {
        console.log(1,error)
        throw error;
    }
}


export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId
    );

    return posts.documents;
  } catch (error) {
    throw error;
  }
}


export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.orderDesc("$createdAt", Query.limit(7))]
    );

    return posts.documents;
  } catch (error) {
    throw error;
  }
}