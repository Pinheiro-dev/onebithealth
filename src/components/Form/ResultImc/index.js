import { View, Text, TouchableOpacity, Share, Image} from "react-native"
import styles from "./style"

export default function ResultImc(props) {

    const onShare = async () => {
        const _ = await Share.share({
            message: `Meu imc hoje é ${props.result}`
        })
    }

    return (
        <View style={styles.container}>
            <View> 
                <Text style={styles.information}>{props.message}</Text>
                <Text style={styles.numberImc}>{props.result}</Text>
            </View>
            <View style={styles.boxShareButton}>
                <TouchableOpacity
                    onPress={onShare} 
                    style={styles.sharedButton}
                >
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}