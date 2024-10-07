import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Tiêu đề và ảnh đại diện */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.username}>Christie Doe</Text>
          </View>
          <Image 
            source={{ uri: 'data:image/jpeg;base64,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' }} 
            style={styles.profileImage} 
          />
        </View>

        {/* Các thẻ Insights */}
        <View style={styles.insightsContainer}>
          <Text style={styles.insightsTitle}>Your Insights</Text>
          <View style={styles.insightGrid}>
            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="scan-outline" size={40} color="#7E57C2" />
              <Text style={styles.insightText}>Scan new</Text>
              <Text style={styles.insightNumber}>Scanned 483</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="alert-circle-outline" size={40} color="#FF7043" />
              <Text style={styles.insightText}>Counterfeits</Text>
              <Text style={styles.insightNumber}>Counterfeited 32</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="checkmark-circle-outline" size={40} color="#66BB6A" />
              <Text style={styles.insightText}>Success</Text>
              <Text style={styles.insightNumber}>Checkouts 8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.insightCard}>
              <Ionicons name="calendar-outline" size={40} color="#42A5F5" />
              <Text style={styles.insightText}>Directory</Text>
              <Text style={styles.insightNumber}>History 26</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore More */}
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreTitle}>Explore More</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Ionicons name="arrow-forward-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Thanh điều hướng dưới cùng */}
      <View style={styles.bottomNavigation}>
        <Ionicons name="home" size={30} color="#7E57C2" />
        <Ionicons name="notifications-outline" size={30} color="#B0BEC5" />
        <Ionicons name="scan-outline" size={30} color="#B0BEC5" />
        <Ionicons name="time-outline" size={30} color="#B0BEC5" />
        <Ionicons name="cart-outline" size={30} color="#B0BEC5" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
  },
  username: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsContainer: {
    marginBottom: 20,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  insightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  insightCard: {
    backgroundColor: '#F7F8FA',
    borderRadius: 10,
    width: '48%',
    padding: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  insightText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  insightNumber: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  exploreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  exploreTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  exploreButton: {
    padding: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
});