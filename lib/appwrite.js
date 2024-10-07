import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';


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

export async function createUser(email, password, username) {
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


export async function signIn(email, password){
    try {
        const session = await account.createEmailPasswordSession(email, password);
    
        return session;
    } catch (error) {
        throw error;
    }
}