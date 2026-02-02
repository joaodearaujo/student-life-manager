export interface UserProfile {
  name: string;
  role: 'Manager' | 'Internship';
  img: string; 
}

export interface UserCard {
    bankName: string;
    cardNumber: string;
    typeCard: string;
    name: string;
    expirationDate: string;
    weeklyLimit: number;
    weeklyUsed: number;
    currentBalance: number;
    income: number;
    outcome: number;
    color: string;
}

export const MOCK_USER: UserProfile = {
  name: 'João de Araújo',
  role: 'Internship',
  img: '../public/profile-image.png'
}

