import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from './store';
import {addUser, addArticle, User, Article} from './complexSlice';
import useRenderCounter from '../../hooks/useRenderCounter';
import {getUsersWithArticles} from './complexSelectors';

type TUserProps = {
  selectUser: () => void;
  selectedUserId: User['id'] | null;
  id: number;
  name: string;
  articles: Article[];
};

const UserCmp = ({
  id,
  name,
  articles,
  selectUser,
  selectedUserId,
}: TUserProps) => (
  <TouchableOpacity style={styles.userContainer} onPress={() => selectUser()}>
    <Text style={id === selectedUserId ? styles.selectedUser : undefined}>
      User: {name}
    </Text>
    <FlatList
      data={articles}
      keyExtractor={article => article.id.toString()}
      renderItem={({item: article}) => <Text>Article: {article.title}</Text>}
    />
  </TouchableOpacity>
);

const ComplexStateScreen: React.FC = () => {
  useRenderCounter('ComplexStateScreen');
  const dispatch = useDispatch();
  // const usersWithArticles = useSelector(getUsersWithArticles);
  const users = useSelector((state: RootState) => state.complexData.users);
  const articles = useSelector(
    (state: RootState) => state.complexData.articles,
  );

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const usersWithArticles = useMemo(
    () =>
      users.map(user => ({
        ...user,
        articles: articles.filter(article => article.userId === user.id),
      })),
    [users, articles],
  );

  const handleAddUser = (username: string, cleanup: () => void) => {
    dispatch(addUser({id: Math.random(), name: username}));
    cleanup();
  };

  const handleAddArticle = (title: string, cleanup: () => void) => {
    if (selectedUserId) {
      dispatch(
        addArticle({
          id: Math.random(),
          title,
          userId: selectedUserId,
        }),
      );
      cleanup();
    } else {
      alert('Select a user first!');
    }
  };

  return (
    <View style={styles.container}>
      <AddUserForm handleAddUser={handleAddUser} />
      <AddUserArticleForm handleAddArticle={handleAddArticle} />
      <FlatList
        data={usersWithArticles}
        keyExtractor={user => user.id.toString()}
        renderItem={({item}) => (
          <UserCmp
            {...item}
            selectUser={() => setSelectedUserId(item.id)}
            selectedUserId={selectedUserId}
          />
        )}
      />
    </View>
  );
};

const AddUserForm = ({
  handleAddUser,
}: {
  handleAddUser: (name: string, cleanup: () => void) => void;
}) => {
  const [newUserName, setNewUserName] = useState('');

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter new user name"
        value={newUserName}
        onChangeText={setNewUserName}
      />
      <Button
        title="Add User"
        onPress={() => handleAddUser(newUserName, () => setNewUserName(''))}
      />
    </>
  );
};

const AddUserArticleForm = ({
  handleAddArticle,
}: {
  handleAddArticle: (title: string, cleanup: () => void) => void;
}) => {
  const [newArticleTitle, setNewArticleTitle] = useState('');

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter new article title"
        value={newArticleTitle}
        onChangeText={setNewArticleTitle}
      />
      <Button
        title="Add Article"
        onPress={() =>
          handleAddArticle(newArticleTitle, () => setNewArticleTitle(''))
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
  userContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedUser: {
    backgroundColor: '#ddd', // Highlight selected user
  },
  // ... additional styles
});

export default ComplexStateScreen;
