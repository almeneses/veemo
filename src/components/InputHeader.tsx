import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BORDER_RADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/defaultTheme';
import CustomIcon from './CustomIcon';

type InputHeaderProps = {
  onSearch: (searchText: string) => void;
};

const InputHeader = ({onSearch}: InputHeaderProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');

  const onTextChange = (textInput: string): void => setSearchText(textInput);
  const onTextSearch = (): void => onSearch(searchText);

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={onTextChange}
        value={searchText}
        placeholder="What are you watching?"
        placeholderTextColor={COLORS.WhiteRGBA40}
      />
      <TouchableOpacity style={styles.searchIcon} onPress={onTextSearch}>
        <CustomIcon name="search" color={COLORS.Orange} size={FONTSIZE.s_20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: SPACING.s_24,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDER_RADIUS.r_25,
  },

  textInput: {
    width: '90%',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.s_14,
    color: COLORS.White,
  },

  searchIcon: {
    padding: SPACING.s_10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputHeader;
