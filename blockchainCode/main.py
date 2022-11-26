import rsa

public_key, private_key = rsa.newkeys(32)
pkey = public_key.save_pkcs1("PEM")
print(pkey)

pvtkey = private_key.load_pkcs1("PEM")
print(pvtkey)

userData = "Name PH-number ADHAAR-number"

# verification = rsa.encrypt(userData.encode(),public_key)

print(rsa.encrypt(userData.encode(),public_key))

# decryption = rsa.decrypt(verification,private_key)

# print(rsa.decrypt(verification,private_key))

